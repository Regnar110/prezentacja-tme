'use server'

export async function addTodo(title: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    id: Math.random().toString(36).substring(7),
    title,
    createdAt: new Date().toISOString()
  }
}

export async function deleteTodo(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { success: true, id }
}

export async function updateTodoStatus(id: string, completed: boolean) {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { id, completed }
}