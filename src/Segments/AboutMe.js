import React from 'react';
import {Header, List, Segment} from "semantic-ui-react";

function AboutMe() {
    return (
        <Segment style={{padding: '2em 2em', backgroundColor: '#eee', color: 'rgba(51,51,51,0.9)'}}
                 className={'about-me'} vertical>
            <Header as='h1'>About Me</Header>
            <Header as='h3'>History</Header>
            <List>
                <List.Item>2018.12. ~ now <a href='https://devsisters.com/' target='_blank'
                                             rel='noopener noreferrer'>Devsisters</a> Software Engineer</List.Item>
                <List.Item>2016.11. ~ 2018.06. <a href='https://anyfi.io' target='_blank' rel='noopener noreferrer'>애니파이
                    Anyfi</a> Software Engineer</List.Item>
                <List.Item>2010.03. ~ 2017.08. 서울과학기술대학교 컴퓨터공학과 졸업</List.Item>
                <List.Item>2007.03. ~ 2010.02. 서울디지텍고등학교 전자게임과 졸업</List.Item>
            </List>
            <Header as='h3'>Skill</Header>
            <Header as='h4'>Main</Header>
            <p>C#, C++, iOS(Objective-C, Swift), Android(JAVA), Unity3D, Docker</p>
            <Header as='h4'>ETC</Header>
            <p>Kubernetes, Python, MySQL, Node.js, jQuery, PHP, git, AWS, Firebase, Cocos2d-x...</p>
        </Segment>
    );
}

export default AboutMe;
