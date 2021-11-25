import * as React from 'react';
import useSettings from "../../../hooks/useSettings";
import {Autocomplete, Box, Button, Grid, TextField} from "@material-ui/core";

export default function EventDetails() {
    const {settings} = useSettings();
    const [variable, setVariable] = React.useState('');
    const handleChange = (event) => {
        setVariable(event.target.value);
    };
    return (
        <>
            <Box sx={{m: 2}}>
                <form>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="EVENT NAME"
                                name="name"
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Meeting Chair"
                                        name="meeting-chair"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Place"
                                        name="place"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Year"
                                        name="year"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="3 Comments"
                                        name="3-comments"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Comments"
                                        name="comments"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Content Time"
                                        name="content-time"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Comments Against"
                                        name="comments-against"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="PerUser PerItem"
                                        name="user-item"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Voting Session Time"
                                        name="voting-time"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="Comment Session"
                                        name="comment-session"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={temp}
                                renderInput={(params) => (
                                    <TextField
                                        label="% Vote Call"
                                        name="vote-call"
                                        onChange={handleChange}
                                        variant="outlined"
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Button
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Button
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
}

const temp = [
    {text: '1', value: '1'},
    {text: '2', value: '2'},
    {text: '3', value: '3'},
]