import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="container bg-primary rounded-top-3 py-3 mt-auto">
      <div className="d-flex justify-content-center">
        <p className="text-secondary mb-0">
          &copy; {new Date().getFullYear()} Backendless
        </p>

      </div>

    </footer>
  )
}

export default Footer
