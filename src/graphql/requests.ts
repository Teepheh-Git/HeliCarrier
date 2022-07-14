import axios from "axios";

const BaseUrlGql = ` https://swapi-graphql.netlify.app/.netlify/functions/index`;


export const HandleQueryNoToken = (fd: any, timer = false): any => {
    return new Promise((resolve, reject) => {
        axios.post(
            BaseUrlGql,
            {
                query: `${fd}`,
            }
        )
            .then((res) => {
                // console.log("res,<<", res);
                return resolve(res.data);
            })
            .catch((error) => {
                // console.log("error>>", error.response);
                let error_msg: any = {
                    msg: "Network Error! Please try again",
                    code: 500,
                    FromServer: error.Error
                };
                if (
                    error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.data &&
                    error.response.data.data[0] &&
                    error.response.data.data[0].messages &&
                    error.response.data.data[0].messages[0]
                ) {
                    error_msg = {
                        msg: error.response.data.data[0].messages[0].message,
                        code: error.response.status,
                    };
                }
                return reject(error_msg);
            });
        if (timer) {
            setTimeout(() => {
                return reject({
                    msg: "Network Error! Please try again",
                    code: 500,
                });
            }, 5000);
        }
    });
};
