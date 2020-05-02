( find ./src -name '*.ts*' -print0 | xargs -0 cat ) | wc -l
( find ./src -name '*.css' -print0 | xargs -0 cat ) | wc -l