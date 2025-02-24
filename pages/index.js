import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Next.js Authentication</h1>
            {session ? (
                <>
                    <p>Welcome, {session.user.name}</p>
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
            ) : (
                <button onClick={() => signIn()}>Sign In</button>
            )}
        </div>
    );
}