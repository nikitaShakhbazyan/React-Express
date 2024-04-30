const errorHandler = (err,req,res,next) => {
    
    switch (status) {
        case 400:
            res.json({title : "Validation Failed",
            message : err.message,
        })
            break;
        case 404 :
            res.json({title : "Not Found",
            message : err.message,
        })
        default:
            break;
    }
}

module.exports = errorHandler