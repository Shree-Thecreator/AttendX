import { createClient } from '@supabase/supabase-js'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function AddStudentPage({ 
  params 
}: { 
  params: Promise<{ semesterId: string }> 
}) {
  // 1. Await the promise
  const { semesterId } = await params;

  // 2. Server Action for the form
  async function handleAddStudent(formData: FormData) {
    "use server";
    
    // Initialize INSIDE the action so it only runs when the form is submitted
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const name = formData.get("studentName") as string;
    const rollId = formData.get("rollId") as string;

    const { error } = await supabase
      .from('students')
      .insert([{ 
        name, 
        roll_id: rollId, 
        semester_id: semesterId 
      }]);

    if (!error) {
      revalidatePath(`/Dashboard/${semesterId}`);
      redirect(`/Dashboard/${semesterId}`);
    }
  }

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-md mx-auto border p-6 rounded-2xl shadow-sm">
        <h1 className="text-xl font-bold mb-4">Add Student - Semester {semesterId}</h1>
        
        <form action={handleAddStudent} className="space-y-4">
          <input 
            name="studentName" 
            placeholder="Student Name" 
            required 
            className="w-full p-3 border rounded-lg outline-none"
          />
          <input 
            name="rollId" 
            placeholder="Roll ID (e.g. 101)" 
            required 
            className="w-full p-3 border rounded-lg outline-none"
          />
          <div className="flex gap-2">
            <button 
              type="submit" 
              className="flex-1 bg-black text-white p-3 rounded-lg font-bold hover:bg-gray-800"
            >
              Save Student
            </button>
            <Link 
              href={`/Dashboard/${semesterId}`} 
              className="p-3 border rounded-lg text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}