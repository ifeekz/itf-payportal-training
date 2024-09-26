import axios from "axios";

export async function userLogin(url: string, { arg }: { arg: any }) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${url}`,
      { ...arg }
    );

    if (!response.data) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  } catch (error: any) {
    //   console.error("Error fetching user data:", error);
    return error?.response?.data ?? error;
  }
};

// eslint-disable-next-line
export async function userLogin2(url: string, { arg }: { arg: any }) {
    if (arg.email === 'test@email.com' && arg.password === '12345678') {
        return {
            success: true,
            statusCode: 200,
            message: 'Login successful',
        }
    }

    return {
      success: false,
      statusCode: 401,
      message: "Invalid login credentials",
    };
 }
