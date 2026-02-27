import { createClient } from '@supabase/supabase-js'
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export default async function AttendancePage({ params }: { params: Promise<{ semesterId: string }> }) {
  const { semesterId } = await params;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // 1. Fetch the students that were saved during registration
  const { data: students, error } = await supabase
    .from('students')
    .select('*')
    .eq('semester_id', semesterId)
    .order('roll_id', { ascending: true });

  // 2. Action to log the attendance
  async function markPresent(studentId: string) {
    "use server";
    const actionClient = createClient(supabaseUrl, supabaseKey);
    await actionClient.from('attendance_logs').insert([{ 
      student_id: studentId, 
      status: 'Present', 
      date: new Date().toISOString().split('T')[0] 
    }]);
    revalidatePath(`/Dashboard/${semesterId}/attendance`);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Take Attendance (Sem {semesterId})</h1>
          <Link href="/teacher" className="text-sm font-bold text-indigo-600">Exit</Link>
        </div>

        <div className="space-y-3">
          {students?.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
              <p className="font-bold">{student.name}</p>
              <form action={markPresent.bind(null, student.id)}>
                <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600">
                  ✅ Present
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}