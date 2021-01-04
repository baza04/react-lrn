import React from 'react'

function BookList() {
    return (
        
        <div className='BooksTable'>
            <h2>BookList</h2>

            <thead>
              <tr className='BookItem'>
                <th>#</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>     

            <tbody>
              <tr>
                <td>1</td>
                <td>Book Title</td>
                <td>2.5</td>
                <td>
                  <button style={{backgroundColor: "green", height: '15px'}}></button>
                  <button style={{backgroundColor:"red", height: '15px'}}></button>
                </td>
              </tr>
            </tbody>     

        </div>

    )
} 

export default BookList 