import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found" style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" style={styles.link}>Go Back Home</Link>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px 20px',
    },
    heading: {
        fontSize: '72px',
        marginBottom: '20px',
        color: '#e74c3c'
    },
    link: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
    }
}

export default NotFound