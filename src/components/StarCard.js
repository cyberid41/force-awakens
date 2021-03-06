import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const StarCard = ({ star }) => (
    <div className="ui fluid card">
        <div className="content">
            <div className="header">{star.name}</div>
            <div className="description">
                <div className="ui list">
                    <div className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            Gender : {star.gender}
                        </div>
                    </div>
                    <div className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            Birth Year : {star.birth_year}
                        </div>
                    </div>
                    <div className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            Height : {star.height}
                        </div>
                    </div>
                    <div className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            Hair Color : {star.hair_color}
                        </div>
                    </div>
                    <div className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            Skin Color : {star.skin_color}
                        </div>
                    </div>
                    <div className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            Eye Color : {star.eye_color}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="extra content">
                              <span className="left floated like">
                                <i className="like icon"></i>
                                Like
                              </span>
                              <span className="right floated">
                                <i className="long arrow right icon"></i>
                                <Link to={`stars/${star.id}`}>See Profile</Link>
                              </span>
        </div>
    </div>
);

StarCard.propTypes = {
    star: PropTypes.object.isRequired
};

export default StarCard
