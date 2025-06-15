import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
  });

  function submit(e) {
    e.preventDefault();
    post(route('tasks.store'));
  }

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create Task</h2>}
    >
      <Head title="Create Task" />

      <form onSubmit={submit} className="max-w-md mx-auto mt-5 p-4 bg-white rounded shadow">
        <div>
          <label htmlFor="title" className="block font-medium text-gray-700">
            Task Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
          {errors.title && <InputError message={errors.title} />}
        </div>

        <PrimaryButton
          className='mt-4'
          type="submit"
          disabled={processing}
        >
          Add
        </PrimaryButton>
      </form>
    </AuthenticatedLayout>
  );
}