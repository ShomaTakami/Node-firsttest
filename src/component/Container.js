import React from "react";

function Container() {
  return (
    <div className='container'>
      <div className='header'>
        <p className='d-inline'>
          Manage <span className='text-st'>Employee</span>
        </p>
        <div className='button d-inline'>
          <button className='add'>
            <i className='fas fa-plus-circle'></i>Add New Employee
          </button>
          <button className='delete'>
            <i className='fas fa-minus-circle'></i>Delete
          </button>
        </div>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr className='tr-color'>
            <th>
              <input type='checkbox' />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>
              <input type='checkbox' />
            </th>
            <td>shoma takami</td>
            <td>thistest@example.com</td>
            <td>snajkfafd , vancouver BC</td>
            <td>09011112222</td>
            <td>
              <i className='fas fa-pen'></i>
              <i className='fas fa-trash'></i>
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <input type='checkbox' />
            </th>
            <td>shoma takami</td>
            <td>thistest@example.com</td>
            <td>snajkfafd , vancouver BC</td>
            <td>09011112222</td>
            <td>
              <i className='fas fa-pen'></i>
              <i className='fas fa-trash'></i>
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <input type='checkbox' />
            </th>
            <td>shoma takami</td>
            <td>thistest@example.com</td>
            <td>snajkfafd , vancouver BC</td>
            <td>09011112222</td>
            <td>
              <i className='fas fa-pen'></i>
              <i className='fas fa-trash'></i>
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <input type='checkbox' />
            </th>
            <td>shoma takami</td>
            <td>thistest@example.com</td>
            <td>snajkfafd , vancouver BC</td>
            <td>09011112222</td>
            <td>
              <i className='fas fa-pen'></i>
              <i className='fas fa-trash'></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>
          Showing <span className='number'>5</span> out of
          <span className='number'>25</span> entries
        </p>
        {/* <ul class="pagination justify-content-end">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>  */}
      </div>
    </div>
  );
}

export default Container;
