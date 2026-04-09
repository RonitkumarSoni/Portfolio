"use client"
import { SITE_NAP } from "@/config/siteConfig"
import { Link } from "@/app/utils/Link"
import { useEffect, useState } from "react"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { ActivityCalendar, type Activity } from "react-activity-calendar"
import { format, subYears, fromUnixTime, formatDistanceToNow } from "date-fns"

interface Submission {
    title: string
    titleSlug: string
    timestamp: string
}

interface Badge {
    id: string
    name: string
    shortName: string
    icon: string
    hoverText: string
}

interface LeetCodeData {
    totalSolved: number
    totalQuestions: number
    easySolved: number
    totalEasy: number
    mediumSolved: number
    totalMedium: number
    hardSolved: number
    totalHard: number
    ranking: number
    contributionPoints: number
    reputation: number
    submissionCalendar: Record<string, number>
    recentSubmissions: Submission[]
    badges: Badge[]
    activeBadge: Badge | null
    avatar: string
    name: string
}

interface LeetCodeContestData {
    contestAttend: number
    contestRating: number
    contestGlobalRanking: number
    contestTopPercentage: number
    totalParticipants: number
}

const ProgressCircle = ({ solved, total, easy, medium, hard }: { solved: number, total: number, easy: number, medium: number, hard: number }) => {
    const radius = 70
    const circumference = 2 * Math.PI * radius
    
    // Percentage for the main ring
    const percentage = total > 0 ? (solved / total) * 100 : 0
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className="relative flex h-32 w-32 sm:h-48 sm:w-48 items-center justify-center shrink-0">
            {/* Background Track */}
            <svg className="absolute h-full w-full -rotate-90 transform" viewBox="0 0 192 192">
                <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-100 dark:text-zinc-800"
                />
                {/* Solved Progress */}
                <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    stroke="#FFA116"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={isNaN(offset) ? circumference : offset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="z-10 flex flex-col items-center">
                <span className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-zinc-100">{solved}</span>
                <div className="h-[1px] w-8 sm:w-12 bg-gray-200 dark:bg-zinc-700 my-1"></div>
                <span className="text-[10px] sm:text-sm font-medium text-gray-400 dark:text-zinc-500">{total}</span>
            </div>
        </div>
    )
}

import { leetcodeFallbackData } from "@/app/data/leetcode-data"

export const LeetCodeStats = () => {
    const [stats, setStats] = useState<LeetCodeData>({
        ...leetcodeFallbackData as any,
        recentSubmissions: [],
        badges: [],
        activeBadge: null,
        contributionPoints: 0,
        reputation: 0,
        totalSolved: leetcodeFallbackData.totalSolved || 0,
        totalQuestions: 3800,
        avatar: "",
        name: "Ronit Soni"
    })
    const [contestStats, setContestStats] = useState<LeetCodeContestData>(leetcodeFallbackData as unknown as LeetCodeContestData)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark')
        setTheme(isDark ? 'dark' : 'light')

        // Observer to handle theme changes
        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark')
            setTheme(isDark ? 'dark' : 'light')
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
        return () => observer.disconnect()
    }, [])

    const CACHE_KEY_STATS = "leetcode-dashboard-cache-v2"
    
    // Robust username extraction
    const username = SITE_NAP.profiles.leetcode.split("/").filter(Boolean).pop() || "ronitkumarsoni"

    useEffect(() => {
        const loadCache = () => {
            try {
                const cached = localStorage.getItem(CACHE_KEY_STATS)
                if (cached) {
                    const parsed = JSON.parse(cached)
                    setStats(prev => ({ ...prev, ...parsed.stats }))
                    setContestStats(parsed.contest)
                }
            } catch (err) {
                console.error("Failed to load LeetCode cache", err)
            }
        }
        loadCache()

        const fetchData = async () => {
            try {
                const apiBase = "https://alfa-leetcode-api.onrender.com"
                
                const [statsRes, calendarRes, contestRes, profileRes, questionsRes, acRes, badgesRes] = await Promise.all([
                    fetch(`${apiBase}/${username}/solved`),
                    fetch(`${apiBase}/${username}/calendar`),
                    fetch(`${apiBase}/${username}/contest`),
                    fetch(`${apiBase}/${username}`),
                    fetch(`${apiBase}/problems?limit=1`),
                    fetch(`${apiBase}/${username}/acSubmission`),
                    fetch(`${apiBase}/${username}/badges`)
                ])

                const newData: Partial<LeetCodeData> = {}

                if (statsRes.ok) {
                    const d = await statsRes.json()
                    newData.totalSolved = d.solvedProblem || 0
                    newData.easySolved = d.easySolved || 0
                    newData.mediumSolved = d.mediumSolved || 0
                    newData.hardSolved = d.hardSolved || 0
                }

                if (profileRes.ok) {
                    const d = await profileRes.json()
                    newData.ranking = d.ranking || 0
                    newData.reputation = d.reputation || 0
                    newData.contributionPoints = d.contributionPoints || 0
                    newData.avatar = d.avatar || ""
                    newData.name = d.name || "Ronit Soni"
                }

                if (questionsRes.ok) {
                    const d = await questionsRes.json()
                    newData.totalQuestions = d.totalQuestions || 3800
                }

                if (calendarRes.ok) {
                    const d = await calendarRes.json()
                    if (d.submissionCalendar) {
                        newData.submissionCalendar = JSON.parse(d.submissionCalendar)
                    }
                }

                if (acRes.ok) {
                    const d = await acRes.json()
                    newData.recentSubmissions = d.submission || []
                }

                if (badgesRes.ok) {
                    const d = await badgesRes.json()
                    newData.badges = d.badges || []
                    newData.activeBadge = d.activeBadge || null
                }

                setStats(prev => {
                    const updated = { ...prev, ...newData }
                    return updated
                })

                if (contestRes.ok) {
                    const d = await contestRes.json()
                    if (d && !d.error) {
                        const c = {
                            contestAttend: d.contestAttend || 0,
                            contestRating: d.contestRating || 0,
                            contestGlobalRanking: d.contestGlobalRanking || 0,
                            contestTopPercentage: d.contestTopPercentage || 0,
                            totalParticipants: d.totalParticipants || 0
                        }
                        setContestStats(c)
                        localStorage.setItem(CACHE_KEY_STATS, JSON.stringify({ stats: newData, contest: c }))
                    }
                }
            } catch (err) {
                console.error("LeetCode fetch error", err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [username])

    // Process submission calendar for heatmap
    let calendarData: Activity[] = []
    const today = new Date()
    const start = subYears(today, 1)

    if (stats.submissionCalendar) {
        Object.entries(stats.submissionCalendar).forEach(([ts, count]) => {
            const timestamp = parseInt(ts)
            if (!isNaN(timestamp)) {
                const date = fromUnixTime(timestamp)
                if (date >= start) {
                    calendarData.push({
                        date: format(date, "yyyy-MM-dd"),
                        count: count,
                        level: Math.min(4, Math.ceil(count / 2)) as any
                    })
                }
            }
        })
    }
    if (calendarData.length === 0) {
        calendarData = [{ date: format(today, "yyyy-MM-dd"), count: 0, level: 0 }]
    }

    return (
        <MotionDiv
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 relative z-10"
        >
            {/* Top Dashboard Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                
                {/* Profile Card & Stats Integration */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-6 shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-white/10">
                                    {stats.avatar ? (
                                        <img src={stats.avatar} alt={stats.name} className="h-full w-full object-cover" />
                                    ) : (
                                        <div className="h-full w-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-gray-400 dark:text-zinc-600">
                                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{stats.name}</h3>
                                    <span className="text-sm text-gray-500 dark:text-zinc-400">Rank ~{stats.ranking.toLocaleString()}</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-white/10 pt-6">
                                <div>
                                    <p className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Reputation</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-zinc-100">{stats.reputation}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Points</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-zinc-100">{stats.contributionPoints}</p>
                                </div>
                            </div>

                            <Link href={SITE_NAP.profiles.leetcode} target="_blank" className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all hover:bg-black">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.732-1.772.732a2.461 2.461 0 01-1.784-.732L2.487 13.175a2.461 2.461 0 010-3.504l7.362-7.362c.484-.484 1.13-.755 1.784-.755.655 0 1.3.271 1.784.755l2.697 2.607c.254.254.385.592.368.95a1.36 1.36 0 01-.89 1.258 1.36 1.36 0 01-1.397-.502l-1.92-1.854a.73.73 0 00-1.015 0L5.593 11.41a.73.73 0 000 1.015l5.084 5.084a.73.73 0 001.015 0l1.92-1.854c.328-.317.828-.41 1.25-.231a1.36 1.36 0 01.817 1.238c.038.384-.094.77-.377 1.026z" />
                                </svg>
                                View Live Profile
                            </Link>
                        </div>
                    </div>

                    {/* Community Stats Mockup */}
                    <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-6 shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] hidden lg:block">
                        <p className="text-sm font-bold text-gray-900 dark:text-zinc-100 mb-4">Activity Overview</p>
                        <div className="space-y-4">
                            {[
                                { icon: "👁️", label: "Views", val: stats.reputation * 3 },
                                { icon: "✅", label: "Solutions", val: Math.floor(stats.totalSolved / 10) },
                                { icon: "💬", label: "Discuss", val: 0 },
                                { icon: "⭐", label: "Reputation", val: stats.reputation },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg grayscale">{s.icon}</span>
                                        <span className="text-sm text-gray-600 dark:text-zinc-400 font-medium">{s.label}</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 dark:text-zinc-100">{s.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Central Dashboard Area */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Top Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Solved Progress Donut */}
                        <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-4 sm:p-6 shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            <ProgressCircle 
                                solved={stats.totalSolved} 
                                total={stats.totalQuestions}
                                easy={stats.easySolved}
                                medium={stats.mediumSolved}
                                hard={stats.hardSolved}
                            />
                            <div className="flex flex-col gap-2 sm:gap-3 w-full sm:flex-1">
                                <div className="rounded-xl bg-teal-50 dark:bg-teal-900/20 p-3 flex justify-between items-center text-teal-700 dark:text-teal-400">
                                    <span className="text-xs font-bold uppercase">Easy</span>
                                    <span className="font-bold">{stats.easySolved}/935</span>
                                </div>
                                <div className="rounded-xl bg-orange-50 dark:bg-orange-900/20 p-3 flex justify-between items-center text-orange-700 dark:text-orange-400">
                                    <span className="text-xs font-bold uppercase">Med.</span>
                                    <span className="font-bold">{stats.mediumSolved}/2036</span>
                                </div>
                                <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-3 flex justify-between items-center text-red-700 dark:text-red-400">
                                    <span className="text-xs font-bold uppercase">Hard</span>
                                    <span className="font-bold">{stats.hardSolved}/921</span>
                                </div>
                            </div>
                        </div>

                        {/* Badges Preview */}
                        <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-6 shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm font-bold text-gray-900 dark:text-zinc-100">Badges</p>
                                <span className="text-2xl font-black text-gray-900 dark:text-zinc-100 opacity-20">{stats.badges.length}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center justify-center flex-1">
                                {stats.badges.length > 0 ? (
                                    stats.badges.slice(-3).map((badge, i) => (
                                        <div key={i} title={badge.hoverText} className="group relative">
                                            <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                                            <img 
                                                src={badge.icon.startsWith("http") ? badge.icon : `https://leetcode.com${badge.icon}`} 
                                                alt={badge.name} 
                                                className="h-16 w-16 relative grayscale hover:grayscale-0 transition-all hover:scale-110" 
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-gray-300 italic text-sm">Collect badges by completing challenges</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Heatmap Section */}
                    <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-6 shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-lg font-bold text-gray-900 dark:text-zinc-100">Submissions</p>
                                <p className="text-xs text-gray-500 dark:text-zinc-500 uppercase font-semibold">Past one year history</p>
                            </div>
                            <div className="text-right">
                                <span className="text-sm font-bold text-gray-900 dark:text-zinc-100">{calendarData.reduce((acc, curr) => acc + curr.count, 0)} Total</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-2 scrollbar-hide">
                            <div className="min-w-[600px]">
                                <ActivityCalendar
                                    data={calendarData}
                                    theme={{
                                        light: ['#ebedf0', '#fbbf24', '#f59e0b', '#d97706', '#b45309'],
                                        dark: ['#1f2937', '#fbbf24', '#f59e0b', '#d97706', '#b45309'],
                                    }}
                                    colorScheme={theme}
                                    blockSize={12}
                                    blockMargin={4}
                                    fontSize={12}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Recent Submissions List */}
                    <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 overflow-hidden shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                        <div className="bg-gray-50/50 dark:bg-zinc-800/30 p-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                            <div className="flex gap-4">
                                <span className="text-sm font-bold text-gray-900 dark:text-zinc-100 border-b-2 border-orange-500 pb-1">Recent AC</span>
                                <span className="text-sm font-medium text-gray-400 dark:text-zinc-500">Solutions</span>
                            </div>
                            <Link href={`${SITE_NAP.profiles.leetcode}/submissions/`} target="_blank" className="text-xs font-semibold text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-300 transition-colors">
                                View all →
                            </Link>
                        </div>
                        <div className="divide-y divide-gray-50 dark:divide-white/5">
                            {stats.recentSubmissions.length > 0 ? (
                                stats.recentSubmissions.slice(0, 5).map((sub, i) => (
                                    <div key={i} className="group p-4 flex items-center justify-between transition-colors hover:bg-gray-50 dark:hover:bg-zinc-800/50">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900 dark:text-zinc-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{sub.title}</span>
                                            <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-medium uppercase tracking-widest">Accepted</span>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-zinc-500 whitespace-nowrap">
                                            {formatDistanceToNow(fromUnixTime(parseInt(sub.timestamp)), { addSuffix: true })}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-400 dark:text-zinc-500 italic text-sm">No recent submissions found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MotionDiv>
    )
}
