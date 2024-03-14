import express from 'express';
import https from 'https'; // No need to specify 'node:http' since it's a built-in module
import cors from 'cors';
import mysql from 'mysql';
import axios from 'axios';
import { log } from 'console'; // No need to specify 'node:console' since it's a built-in module
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

const con = mysql.createConnection({
    host: "172.232.121.148",
    user: "root",
    password: "Mysql@123",
    database: "wordpress"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
    }
    console.log("Connected to MySQL with connection id " + con.threadId);
});

app.get('/blogs', (req, res) => {
    const query = `SELECT wp_posts.ID,wp_posts.post_content,wp_posts.post_title,wp_posts.post_date,wppost.guid FROM wp_posts left join wp_postmeta ON wp_posts.ID=wp_postmeta.post_id and wp_postmeta.meta_key='_thumbnail_id' LEFT join wp_posts as wppost ON wppost.ID=wp_postmeta.meta_value LEFT JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID LEFT JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id LEFT JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_id WHERE wp_posts.post_type = 'post' AND wp_posts.post_status = 'publish'`;

    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

app.post('/UPSCblogs', bodyParser.json(), (req, res) => {
    let date = req?.body?.date;

    let query = `SELECT wp_posts.ID,wp_posts.post_content,wp_posts.post_title,wp_posts.post_date,wppost.guid FROM wp_posts left join wp_postmeta ON wp_posts.ID=wp_postmeta.post_id and wp_postmeta.meta_key='_thumbnail_id' LEFT join wp_posts as wppost ON wppost.ID=wp_postmeta.meta_value LEFT JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID LEFT JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id LEFT JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_id WHERE wp_posts.post_type = 'post' AND wp_posts.post_status = 'publish'`;

    if (date) {
        query += ` AND post_date BETWEEN '${date}' AND DATE_ADD('${date}', INTERVAL 1 DAY)`;
    }

    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

app.get('/category', (req, res) => {
    const query = `SELECT * FROM wp_terms`;
    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

app.get('/faqList', (req, res) => {
    const query = `SELECT wp_posts.ID,wp_posts.post_content,wp_posts.post_title,wp_posts.post_date,wppost.guid FROM wp_posts left join wp_postmeta ON wp_posts.ID=wp_postmeta.post_id and wp_postmeta.meta_key='_thumbnail_id' LEFT join wp_posts as wppost ON wppost.ID=wp_postmeta.meta_value LEFT JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID LEFT JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id LEFT JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_id WHERE wp_posts.post_type = 'post' AND wp_posts.post_status = 'publish' AND wp_terms.name = 'FAQ'`
    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

app.get('/getContentById/:id', bodyParser.json(), (req, res) => {
    const postId = req.params.id;
    const query = `SELECT * FROM wp_posts where ID = ${postId}`;
    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});


app.get('/currentAffairList', (req, res) => {

    const query = `SELECT wp_posts.ID,wp_posts.post_content,wp_posts.post_title,wp_posts.post_date,wppost.guid FROM wp_posts left join wp_postmeta ON wp_posts.ID=wp_postmeta.post_id and wp_postmeta.meta_key='_thumbnail_id' LEFT join wp_posts as wppost ON wppost.ID=wp_postmeta.meta_value LEFT JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID LEFT JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id LEFT JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_id WHERE wp_posts.post_type = 'post' AND wp_posts.post_status = 'publish' AND wp_terms.name = 'Current Affair'`;

    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
