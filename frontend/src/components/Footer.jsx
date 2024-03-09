import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="card text-center">
        <div className="card-header">
          <Logo width="120px"/>
        </div>
        <div className="card-body">
          <p className='container'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
