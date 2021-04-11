const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData(tbl_name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${tbl_name}`;

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async countAllMembers(tbl_name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT COUNT(member_id) AS memberNo FROM tbl_members;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
//////////////////////////////////////// BACKUP ///////////////////////////////////
    // async insertNewName(name) {
    //     try {
    //         const dateAdded = new Date();
    //         const insertId = await new Promise((resolve, reject) => {
    //             const query = "INSERT INTO names (name, date_added) VALUES (?,?);";

    //             connection.query(query, [name, dateAdded] , (err, result) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(result.insertId);
    //             })
    //         });
    //         return {
    //             id : insertId,
    //             name : name,
    //             dateAdded : dateAdded
    //         };
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    async insertofficer({member_id,officer_type,officer_position,officer_task}) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO tbl_officers (member_id,officer_type,officer_position,officer_task) VALUES (?,?,?,?) ;";

                connection.query(query, [member_id,officer_type,officer_position,officer_task] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                // member_id : member_id,
                // officer_type : officer_type,
            };
        } catch (error) {
            console.log(error);
        }
    }

    async insertmember({member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id}) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO tbl_members (member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ;";

                connection.query(query, [member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return {
                // member_id : member_id,
                // officer_type : officer_type,
            };
        } catch (error) {
            console.log(error);
        }
    }

    async insertloan({member_id,loan_principalamount,loan_interestrate,loan_term,loan_status,loan_eligibility}) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO tbl_loan (member_id,loan_principalamount,loan_interestrate,loan_term,loan_status,loan_eligibility) VALUES (?,?,?,?,?,?) ;";

                connection.query(query, [member_id,loan_principalamount,loan_interestrate,loan_term,loan_status,loan_eligibility] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return {
                // member_id : member_id,
                // officer_type : officer_type,
            };
        } catch (error) {
            console.log(error);
        }
    }



    async deleteRowByofficerId(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM tbl_officers WHERE member_id = ?;";
    
                connection.query(query, [id] , (err) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteRowBymemberId(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM tbl_members WHERE member_id = ?;";
    
                connection.query(query, [id] , (err) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async deleteRowByloanId(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM tbl_loan WHERE member_id = ?;";
    
                connection.query(query, [id] , (err) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    async updateofficerbyid(member_id,officer_type,officer_position,officer_task) {
        try {
            let id = parseInt(member_id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE tbl_officers SET officer_type = ?,officer_position = ?,officer_task=? WHERE member_id = ?";
    
                connection.query(query, [officer_type,officer_position,officer_task,id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updatememberbyid(member_id,member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id) {
        try {
            let id = parseInt(member_id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE tbl_members SET member_fname = ?,member_lname = ?,member_birthdate = ?,member_occupation = ?,member_education = ?,member_email = ?,member_age = ?,member_sex = ?,member_status = ?,member_school = ?,member_shares = ?,loan_status = ?,subs_id = ? WHERE member_id = ?";
    
                connection.query(query, [member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id,id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateloanbyid(member_id,loan_principalamount,loan_interestrate,loan_term,loan_status) {
        try {
            let id = parseInt(member_id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE tbl_loan SET loan_principalamount = ?,loan_interestrate = ?,loan_term = ?,loan_status = ? WHERE member_id = ?";
    
                connection.query(query, [loan_principalamount,loan_interestrate,loan_term,loan_status,id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async searchByName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM names WHERE name = ?;";

                connection.query(query, [name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }



}

module.exports = DbService;