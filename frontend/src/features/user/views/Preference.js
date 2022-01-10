import React from "react";
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Preference() {
    return (<>
        <h1>선호하는 여행 취향 선택</h1>
        <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
            &nbsp;
            <Link to="/" component={RouterLink}>
            다음
            </Link>
        </Typography>
        
    </>)
}