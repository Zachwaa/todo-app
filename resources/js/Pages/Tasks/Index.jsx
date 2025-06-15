import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { usePage, router } from '@inertiajs/react';

export default function Index() {
    const { tasks } = usePage().props;

    function handleDelete(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            router.delete(route('tasks.destroy', taskId));
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Your Tasks
                    </h2>
                    <Link
                        href={route('tasks.create')}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Add Task
                    </Link>
                </div>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <ul>
                        {tasks.length ? (
                            tasks.map(task => (
                                <li key={task.id} className='p-2 mt-1 overflow-hidden bg-white shadow-sm sm:rounded-lg'>
                                    {task.completed ? <del>{task.title}</del> : (
                                        <div className='flex justify-between items-center'>
                                            <span>{task.title}</span>
                                            <div>
                                                <Link href={route('tasks.edit', task.id)} className='ml-1'>
                                                    <PrimaryButton>Edit</PrimaryButton>
                                                </Link>
                                                
                                                <DangerButton onClick={() => handleDelete(task.id)} className='ml-1'>Delete</DangerButton>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))
                        ) : (
                            <li>No tasks found.</li>
                        )}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
