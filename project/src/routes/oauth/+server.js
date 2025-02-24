import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import { SECRET_CLIENT_ID,SECRET_CLIENT_SECRET} from "$env/static/private";

export const GET = async ({url})=>{
    const redirectURL = 'http://localhost:5173/oauth';
    const code = await url.searchParams.get('code');
    //console.log('returned code', code);

    try{
        const oAuth2Client = new OAuth2Client(
            SECRET_CLIENT_ID,
            SECRET_CLIENT_SECRET,
            redirectURL
        );

        const r = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(r.tokens);
        console.log('Auth Token received');
        const user = oAuth2Client.credentials;
        console.log('Credentials', user);
    } catch (err) {
        console.log("Error", err);
    }
    throw redirect(303, '/signup');
}