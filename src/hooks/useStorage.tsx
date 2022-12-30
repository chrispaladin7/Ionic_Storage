import { useEffect, useState } from "react"
import {Storage} from '@ionic/storage'


const TODOS_KEY='my-keys'

export interface TodoItem{
    fullname:String;
    id:String;
}


export function useStorage(){
  const  [store,setStore] =useState<Storage>();
  const  [todo,setTodo] =useState<TodoItem[]>([]);
 useEffect(() => {
    const initStorage=async()=>{
        const newStore=new Storage({
            name:'IndexedDB'
        });
        const store=await newStore.create();
        setStore(store);

        const StoredTodo =await store.get(TODOS_KEY)|| [];
        setTodo(StoredTodo);

    }
initStorage();
 }, []);

 const addTodo = async (fullname:string) => {
    const newTodo={
        fullname,
        id:''+Math.random()
    }
    setTodo([...todo,newTodo])
    console.log(todo);
    store?.set(TODOS_KEY,todo);
  }
    
 return {
    todo,
    addTodo
 }
}
