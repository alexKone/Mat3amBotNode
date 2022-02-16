const { auth } = require('../fb.js')

const getUserByUid = async (uid) => {
  try {
    const userRecord = await auth.getUser(uid);
    return {
      response: true,
      data: userRecord
    };
  } catch (error) {
    return {
      response: false,
      data: error.message
    }
  }
}

module.exports = {
  getUserByUid
}