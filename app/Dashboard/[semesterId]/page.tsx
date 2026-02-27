import { createClient } from '@supabase/supabase-js'
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const dynamic = 'force-dynamic';

export default async function SemesterDashboard({ 
  params 
}: { 
  params: Promise<{ semesterId: string }> 
}) {
  // Fix for Next.js 15: await the params promise
  const { semesterId } = await params;

  const { data: students, error } = await supabase
    .from('students')
    .select('*')
    .eq('semester_id', semesterId)
    .order('roll_id', { ascending: true });

  if (error) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-red-500 font-bold">Database Connection Error</h1>
        <p className="text-sm text-gray-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-bold">Semester {semesterId} - Management</h1>
        <Link 
          href={`/Dashboard/${semesterId}/add-student`}
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700"
        >
          + Register New Student
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-sm font-medium">Roll ID</th>
              <th className="p-4 text-sm font-medium">Name</th>
              <th className="p-4 text-sm font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
              <tr key={student.id} className="border-b last:border-none">
                <td className="p-4 font-mono">{student.roll_id}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4 flex justify-center gap-2">
                   <Link 
                    href={`/Dashboard/${semesterId}/attendance`}
                    className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-sm font-bold hover:bg-green-200"
                  >
                    Take Attendance
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
