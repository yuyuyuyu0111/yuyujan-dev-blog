SELECT
    a.*
FROM
    "Article_tag_relation" as a_t_r
    INNER JOIN "Article" as a
        ON a_t_r."articleArticle_id" = a."article_id"
    INNER JOIN "Tag" as t
        ON a_t_r."tagTag_id" = t."tag_id"
        AND t."tag_name" = $1;