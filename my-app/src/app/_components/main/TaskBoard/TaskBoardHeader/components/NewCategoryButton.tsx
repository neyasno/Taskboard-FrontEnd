'use client'

import fetchApi from "@/utils/fetchApi";

export default function NewCategoryButton({}) {
      const addHandler = async () => {
        try {
            await fetchApi();         
        } catch (e) {
            console.log(e);
        }
      };
    
      return (
        <button className='bg-black_l rounded-full text-center p-1.5 px-3 hover:bg-black' onClick={addHandler}>
          +
        </button>
    );
}