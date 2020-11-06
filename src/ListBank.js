import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Card, Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'inherit'
    },
})) 
const ListBank = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <Container>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <div className="body-card">
                                <Avatar>
                                </Avatar>
                                <b>
                                    none
                                </b>
                                <small>
                                    test
                                </small>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <div className="body-card">
                                <Avatar>
                                </Avatar>
                                <b>
                                    none
                                </b>
                                <small>
                                    test
                                </small>
                            </div>
                        </Card>
                    </Grid>

                </Grid>
            </Container>

        </Fragment>
    )
}

export default ListBank
