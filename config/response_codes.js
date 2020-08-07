module.exports = {
  httpStatus: {
    ok: 200,
    badRequest: 400,
    notFound: 404,
    unauthorized: 401,
    forbidden: 403,
    internalServerError: 500,
  },
  responseCode: {
    success: 0,
    invalidToken: 10,
    userNotFound: 21,
    duplicateUser: 24,
    duplicateMsisdn: 25,
    duplicateEmail: 26,
    duplicateProduct: 27,
    userLoginAnotherDevice: 22,
    otpNotMatch: 69,
    otpExpired: 68,
    deviceIdNotMatch: 77,
    missingParameter: 31,
    missingServiceApikey: 32,
  }
};