class BaseModel {
    constructor(data, messge) {
        if (typeof data === string) {
            this.messge = data;
            data = null;
            messge = null;
        }

        if (data) {
            this.data = data
        }

        if (messge) {
            this.messge = messge
        }
    }
}

//成功模型
class SuccessModel extends BaseModel {
    constructor(data, messge) {
        super(data, messge);
        this.errno = 0;
    }
}

//失败模型
class ErrorModel extends BaseModel {
    constructor(data, messge) {
        super(data, messge);
        this.errno = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}