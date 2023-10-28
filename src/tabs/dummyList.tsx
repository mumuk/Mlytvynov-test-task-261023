import React from 'react'

const Description: React.FC = () => (
  <div className="container">
    <h3 className="text-primary mt-3 text-center">My work and thoughts</h3>
    <div className=' border border-primary p-3 my-3 rounded-2 text-primary'>
      <ol>
        <li className="secondary">
          I analyzed the task and asked clarifying questions to make sure I understood it correctly.
        </li>
        <li className="secondary">
          By the time I received the answers and the information that I could use Vite, the Webpack build was already
          set up. However, since Webpack is slower, I eventually moved everything to Vite.
        </li>
        <li className="secondary">
          After creating the project, I set up a backend server using json-server and an API to get the JSON with the
          tabs.
        </li>
        <li className="secondary">
          I created a simple router and basic components.
        </li>
        <li className="secondary">
          I proceeded to the actual solution of the main task.
        </li>
        <li className="secondary">
          Deployment and testing on Vercel.
        </li>
        <li className="secondary">
          Code refactoring.
        </li>

      </ol>
      <p className="secondary">
        Overall impression: the task is interesting, there is space for improvement. There is also a
        slight feeling that I missed or did not notice something.
      </p>
    </div>
  </div>
)

const DummyList: React.FC = () => (
  <div className='container'>
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action active">
        Dummy List Header
      </a>
      <a href="#" className="list-group-item list-group-item-action">Item 1</a>
      <a href="#" className="list-group-item list-group-item-action">Item 2</a>
      <a href="#" className="list-group-item list-group-item-action">Item 3</a>
    </div>
    <Description/>
  </div>)

export default DummyList
