import React from 'react'

const Loading = (props) => {
    if (props.type === 'repoLoading') {
        return (
            <div className="loading-balls">
                <div />
                <div />
                <div />
            </div>
        )
    }

    return <div className="loading-spinner" />
}

export default Loading
