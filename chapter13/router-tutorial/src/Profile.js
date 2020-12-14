import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    yunyoung1819: {
        name: '윤영',
        description: '쿨하고 혁신적인 서비스를 만드는 소프트웨어 개발자'
    },
    sweetjumi: {
        name: '이주미',
        description: '어린이집 선생님'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div> 존재하지 않는 사용자 입니다. </div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
};

export default Profile;