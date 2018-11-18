/**  创建数据库 -- 幻想神域  **/
SET NAMES UTF8;
DROP DATABASE IF EXISTS hx_shenyu;
CREATE DATABASE hx_shenyu CHARSET=UTF8;
USE hx_shenyu;


/**  创建表 -- 手机用户注册   **/
CREATE TABLE phone_reg(
   uid        INT PRIMARY KEY AUTO_INCREMENT,
   phone      CHAR(11),     #手机号码
   upwd	      VARCHAR(16),  #用户密码
   user_name  VARCHAR(6),    #真实姓名
   idCard     CHAR(18)     #身份账号
);

/**  创建表 -- 邮箱用户注册   **/
CREATE TABLE email_reg(
   uid        INT PRIMARY KEY AUTO_INCREMENT,
   email      VARCHAR(30),  #邮箱账号
   upwd	      VARCHAR(16),  #用户密码
   user_name  VARCHAR(6),    #真实姓名
   idCard     CHAR(18)     #身份账号
);

/**  创建表 -- 个性用户注册   **/
CREATE TABLE permit_reg(
   uid        INT PRIMARY KEY AUTO_INCREMENT,
   permit     VARCHAR(16),  #通行证账号
   upwd	      VARCHAR(16),  #用户密码
   user_name  VARCHAR(6),   #真实姓名
   idCard     CHAR(18)     #身份账号
);



/*******************/
/******数据导入******/
/*******************/

/**  手机用户注册   **/
INSERT INTO phone_reg VALUES
(null,'13762563729','2345678','王小明','110245671001360076'),
(null,'13268250711','098765','刘晓','212456889238456123'),
(null,'13592375651','1234566','陈里','110137045908236190');

/**  邮箱用户注册   **/
INSERT INTO email_reg VALUES
(null,'www.faifc@sina.com','2345678','王小明','110245671001360076'),
(null,'www.zhangmanman@126.com','098765','刘晓','212456889238456123'),
(null,'www.904625019@qq.com','1234566','陈里','110137045908236190');

/**  通行证用户注册   **/
INSERT INTO permit_reg VALUES
(null,'faifc1990','2345678','王小明','110245671001360076'),
(null,'zhangmanman','098765','刘晓','212456889238456123'),
(null,'sujie','1234566','陈里','110137045908236190');