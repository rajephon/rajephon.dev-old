import React from 'react';
import {Segment, Header, Icon, Image} from "semantic-ui-react";

function Profile({name, description, email, linkedIn, github, blog}) {
    return (
        <Segment style={{padding: '3em 0em', backgroundColor: '#122442', color: 'rgba(255,255,255,0.9)'}}
                 className={'profile'} textAlign='center' vertical>
            <Image circular size='medium' src='./img/profile.jpg' centered/>
            <Header as='h1' inverted icon>
                {name}
                <Header.Subheader>
                    {description}
                </Header.Subheader>
            </Header>
            <p>
                <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'><Icon name='mail outline'/>E-mail</a>
                <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' rel='noopener noreferrer'><Icon
                    name='linkedin'/>LinkedIn</a>
                <a href={`https://www.github.com/${github}`} target='_blank' rel='noopener noreferrer'><Icon
                    name='github'/>Github</a>
                <a href={blog} target='_blank' rel='noopener noreferrer'><Icon name='linkify'/>Blog</a>
            </p>
        </Segment>
    );
}

export default Profile;
