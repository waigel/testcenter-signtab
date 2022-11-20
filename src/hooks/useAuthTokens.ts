export const useAuthTokens = () => {
    let token = localStorage.getItem('access_token');
    let idToken = localStorage.getItem('id_token');
    let refreshToken = localStorage.getItem('refresh_token');

    const removeAll = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
    };
    const updateTokens = (
        token: string | undefined,
        idToken: string | undefined,
        refreshToken: string | undefined
    ) => {
        token && localStorage.setItem('access_token', token);
        idToken && localStorage.setItem('id_token', idToken);
        refreshToken && localStorage.setItem('refresh_token', refreshToken);
    };

    return {
        token,
        idToken,
        refreshToken,
        updateTokens,
        removeAll
    };
};
