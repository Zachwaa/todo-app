import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ task }) {
    const form = useForm({
        title: task.title,
        completed: task.completed,
    });

    function submit(e) {
        e.preventDefault();
        form.put(route('tasks.update', task.id));
    }

    return (
        <AuthenticatedLayout>
            <form onSubmit={submit} className="max-w-md mx-auto mt-5 p-4 bg-white rounded shadow">
                <div>
                    <input
                        type="text"
                        value={form.data.title}
                        onChange={e => form.setData('title', e.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={form.data.completed}
                            onChange={e => form.setData('completed', e.target.checked)}
                        />
                        Completed
                    </label>
                    {form.errors.title && <InputError message={form.errors.title} />}
                </div>
        
                <PrimaryButton
                    className='mt-4'
                    type="submit"
                    disabled={form.processing}
                >
                    Save
                </PrimaryButton>
            </form>
        </AuthenticatedLayout>
    );
}
