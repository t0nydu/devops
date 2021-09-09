// 获取项目接口的前缀（基础地址）
let baseUrl = process.env.VUE_APP_API_BASEURL;
// 导出模块，包含了所有功能需要用的接口地址
export default {
    // 图形验证码接口（算术验证码）
    getCaptcha: baseUrl + "/captcha/api/math",
    // 图形验证码的验证
    verifyCaptcha: baseUrl + "/api/common/captcha/verify",
    // 短信下发
    sendSms: baseUrl + "/api/common/sms/send",
    // 常规登录接口
    passLogin: baseUrl + "/api/common/auth/login",
    // 短信登录接口
    smsLogin: baseUrl + "/api/common/auth/mobile",
    // 管理员信息获取
    getAdminInof: baseUrl + "/api/common/auth/adminInfo",
    // 用户列表
    getUsers: baseUrl + "/api/users",
    // 用户删除
    delUser: baseUrl + "/api/users/",       // delete
    // 获取用户信息
    getUserInfo: baseUrl + "/api/users/",   // get
    // 提交用户修改
    saveUserInfo: baseUrl + "/api/users/",  // put
    // 影院分布数据
    cinemaLoca: baseUrl + "/api/cinemas/infos/loca"
    // ... 后续有需要再来添加
}