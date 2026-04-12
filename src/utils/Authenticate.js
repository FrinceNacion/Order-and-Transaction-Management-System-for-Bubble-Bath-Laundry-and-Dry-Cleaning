
async function Authenticate() {
    let user = null;
    const getUserEndpoint = 'http://localhost/bubble-bath-backend/get_user.php';

    const response = await fetch(getUserEndpoint, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    if (data.success) {
        user = data.user;
    }else{
        return {'success': false, 'message': 'User not authenticated'};
    }

    return {'success': true, 'user': user};
}

export default Authenticate;