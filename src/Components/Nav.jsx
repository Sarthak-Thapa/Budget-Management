//Library
// import { BeakerIcon } from '@heroicons/vue/24/solid'

//rrd import
import { Form, NavLink } from 'react-router-dom'

import logomark from '../assets/logomark.svg'

const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink to={'/'} aria-label='Go to Home'>
            <img src={logomark} alt="" />
            <span>Home Budget</span>
        </NavLink>
        {
          userName && (
            <Form
            method='post'
            action='/logout'
            onSubmit={(event) =>{
              if (!confirm("Do you want to delete all data?")){
                event.preventDefault()
              }
            }}>
              <button type='submit' className='btn btn--warning'>
                <span>Delete User</span>
                {/* <BeakerIcon width={20}/> */}
              </button>
            </Form>
          )
        }
    </nav>
  )
}

export default Nav