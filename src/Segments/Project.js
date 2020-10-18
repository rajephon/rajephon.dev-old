import React from 'react';
import {Grid, Header, Image, Segment, List} from "semantic-ui-react";

// Reference: https://stackoverflow.com/questions/8495687/split-array-into-chunks#comment84212474_8495740
const arrayChunks = (array, chunk_size) =>
    Array(Math.ceil(array.length / chunk_size)).fill(undefined).map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));


function Project({header, project_history, background, color}) {
    const rows = arrayChunks(project_history, 2).map((items, idx) => {
        const columns = items.map((item, idx) => {
            item.Summary = item.Summary.split('\n').map((l, idx) => (<List.Item key={idx}>{l}</List.Item>));
            return (
                <Grid.Column key={idx} className={'project-item'}>
                    <Image size='large' src={item.Image} centered/>
                    <Header as='h3'>
                        {item.Url ? <a href={item.Url} target='_blank'>{item.Header}</a> : item.Header}
                    </Header>
                    <List>
                        {item.Summary}
                    </List>
                </Grid.Column>
            );
        });
        if (columns.length === 1) {
            columns.push((
                <Grid.Column key={1} className={'project-item'} />
            ));
        }
        return (
            <Grid.Row key={idx}>
                {columns}
            </Grid.Row>
        );
    });

    return (
            <Segment style={{backgroundColor: background, color: color, paddingLeft:'2em', paddingRight:'2em'}} className={'project'} vertical>
                <Header as='h1' style={{paddingTop:'0.4em', marginBottom:0}}>{header}</Header>
                <Grid celled='internally' columns='equal' stackable>
                    {rows}
                </Grid>
            </Segment>
    );
}

export default Project;
