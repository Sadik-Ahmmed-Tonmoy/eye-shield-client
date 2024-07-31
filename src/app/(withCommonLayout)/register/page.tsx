import React from 'react';
import { RegisterWithEmail } from './RegisterWithEmail';
import { BackgroundBeams } from '@/components/ui/background-beams';

const RegisterPage = () => {
    return (
        <div>
            <BackgroundBeams />
            <RegisterWithEmail/>
        </div>
    );
};

export default RegisterPage;