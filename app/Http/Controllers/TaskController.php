<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use Illuminate\Http\Request;
use App\Models\Task;

use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $tasks = auth()->user()->tasks()->orderBy('created_at', 'desc')->get();
        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
    }

    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    public function edit(Task $task)
    {
        $this->authorize('update', $task);

        return Inertia::render('Tasks/Edit', ['task' => $task]);
    }
    public function store(StoreTodoRequest $request)
    {
        $request->validate(['title' => 'required|string|max:255']);
        auth()->user()->tasks()->create([
            'title' => $request->title,
            'completed' => false,
        ]);
        return redirect()->route('tasks.index');
    }

    public function update(UpdateTodoRequest $request, Task $task)
    {
        $this->authorize('update', $task);

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'completed' => 'sometimes|boolean',
        ]);

        $task->update($request->only('title', 'completed'));

        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task)
    {
        $this->authorize('delete', $task);
        $task->delete();
        return redirect()->route('tasks.index');
    }
}
