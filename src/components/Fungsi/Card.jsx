import React from 'react';

const Card = ({ title, description, Icon, color, onClick, href }) => {
    const Wrapper = href
        ? 'a'
        : onClick
            ? 'div'
            : 'div'; // fallback

    const wrapperProps = {
        href: href || undefined,
        onClick: onClick || undefined,
        className: 'card clickable-card',
        style: {
            textDecoration: 'none', // remove underline if <a>
            color: 'inherit',
            cursor: 'pointer',
        },
    };

    return (
        <Wrapper {...wrapperProps}>
            <div className="card-icon">
                {Icon && <Icon size={60} color={color || '#2ecc71'} />}
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Wrapper>
    );
};

export default Card;
