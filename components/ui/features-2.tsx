import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="py-16 md:py-32 bg-slate-50/50">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-extrabold lg:text-5xl text-slate-900 tracking-tight">
                        Built for Modern Teaching
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-medium">
                        Streamline your classroom management at Chronos Cs with tools designed for speed and clarity.
                    </p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group border-0 bg-white shadow-xl shadow-slate-200/50">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6 text-amber-500" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-slate-800 text-lg">Instant Attendance</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-500">Record presence in seconds with direct Supabase synchronization and real-time updates.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 bg-white shadow-xl shadow-slate-200/50">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6 text-indigo-600" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-slate-800 text-lg">Student Management</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-500">Easily register new students, edit details, or manage semester transitions from one dashboard.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 bg-white shadow-xl shadow-slate-200/50">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6 text-purple-500" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-slate-800 text-lg">Digital Register</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-500">Replace paper logs with a secure, searchable digital register accessible from any device.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:theme(colors.slate.200)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"/>
        <div className="bg-white absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l shadow-sm rounded-sm">{children}</div>
    </div>
)