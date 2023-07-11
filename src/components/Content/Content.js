import React, { useState } from 'react';

const Content = () => {
    const [quote, setQuote] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const quote = e.target.quote.value
        setQuote(quote)
    }
    return (
        <div className=' pt-12'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
                <textarea placeholder='Write your quote here' id='quote' rows={5} cols={50} className='p-4 w-max text-md border border-gray-500 rounded-lg' />
                <button type='submit' className='px-8 py-3 rounded-lg bg-blue-600 mt-5 w-max text-white'>Submit</button>
            </form>
            {
                quote && <p className='text-2xl text-center mt-12'>Quote: {quote}</p>
            }
        </div>
    );
};

export default Content;