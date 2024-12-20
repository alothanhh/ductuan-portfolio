'use client'
import React from 'react'

const CvPreview = () => {
    return (
        <div style={{
            zIndex: 999,
            position: 'fixed',
            inset: 0,
        }}>
            <embed
                src="/cv/CV_Thanh_Dang.pdf"
                width="100%"
                height="100%"
                type="application/pdf"
            />
        </div>
    )
}

export default CvPreview