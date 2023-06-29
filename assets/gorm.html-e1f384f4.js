const l=JSON.parse('{"key":"v-034d90ce","path":"/%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6/%E5%AE%9E%E7%94%A8%E6%A1%86%E6%9E%B6/gorm.html","title":"Gorm","lang":"zh-CN","frontmatter":{"description":"官方文档：Gen Guides | GORM - The fantastic ORM library for Golang, aims to be developer friendly. (https://gorm.io/gen/index.html) 官方仓库：go-gorm/gorm: The fantastic ORM library for G...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/Golang-Doc/%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6/%E5%AE%9E%E7%94%A8%E6%A1%86%E6%9E%B6/gorm.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"Gorm"}],["meta",{"property":"og:description","content":"官方文档：Gen Guides | GORM - The fantastic ORM library for Golang, aims to be developer friendly. (https://gorm.io/gen/index.html) 官方仓库：go-gorm/gorm: The fantastic ORM library for G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-02T06:50:29.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-02T06:50:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gorm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-02T06:50:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[{"level":3,"title":"模型","slug":"模型","link":"#模型","children":[]},{"level":3,"title":"链接数据库","slug":"链接数据库","link":"#链接数据库","children":[]},{"level":3,"title":"增加记录","slug":"增加记录","link":"#增加记录","children":[]},{"level":3,"title":"查询记录","slug":"查询记录","link":"#查询记录","children":[]},{"level":3,"title":"更新记录","slug":"更新记录","link":"#更新记录","children":[]},{"level":3,"title":"删除记录","slug":"删除记录","link":"#删除记录","children":[]},{"level":3,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]}]},{"level":2,"title":"数据库连接","slug":"数据库连接","link":"#数据库连接","children":[{"level":3,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"PostgreSQL","slug":"postgresql","link":"#postgresql","children":[]},{"level":3,"title":"SQLite","slug":"sqlite","link":"#sqlite","children":[]},{"level":3,"title":"SQL Server","slug":"sql-server","link":"#sql-server","children":[]},{"level":3,"title":"连接池","slug":"连接池","link":"#连接池","children":[]}]},{"level":2,"title":"约定俗成","slug":"约定俗成","link":"#约定俗成","children":[{"level":3,"title":"ID 作为主键","slug":"id-作为主键","link":"#id-作为主键","children":[]},{"level":3,"title":"复数表名","slug":"复数表名","link":"#复数表名","children":[]},{"level":3,"title":"TableName","slug":"tablename","link":"#tablename","children":[]},{"level":3,"title":"动态表名","slug":"动态表名","link":"#动态表名","children":[]},{"level":3,"title":"临时表名","slug":"临时表名","link":"#临时表名","children":[]},{"level":3,"title":"列名","slug":"列名","link":"#列名","children":[]},{"level":3,"title":"时间戳追踪","slug":"时间戳追踪","link":"#时间戳追踪","children":[]}]},{"level":2,"title":"模型","slug":"模型-1","link":"#模型-1","children":[{"level":3,"title":"Gorm.Model","slug":"gorm-model","link":"#gorm-model","children":[]},{"level":3,"title":"字段级权限控制","slug":"字段级权限控制","link":"#字段级权限控制","children":[]},{"level":3,"title":"创建/更新时间追踪","slug":"创建-更新时间追踪","link":"#创建-更新时间追踪","children":[]},{"level":3,"title":"字段标签","slug":"字段标签","link":"#字段标签","children":[]}]},{"level":2,"title":"查询","slug":"查询","link":"#查询","children":[{"level":3,"title":"检索单个对象","slug":"检索单个对象","link":"#检索单个对象","children":[]},{"level":3,"title":"主键检索","slug":"主键检索","link":"#主键检索","children":[]},{"level":3,"title":"检索全部对象","slug":"检索全部对象","link":"#检索全部对象","children":[]},{"level":3,"title":"字符串条件","slug":"字符串条件","link":"#字符串条件","children":[]},{"level":3,"title":"数据结构条件","slug":"数据结构条件","link":"#数据结构条件","children":[]},{"level":3,"title":"内联条件","slug":"内联条件","link":"#内联条件","children":[]},{"level":3,"title":"Not条件","slug":"not条件","link":"#not条件","children":[]},{"level":3,"title":"Or条件","slug":"or条件","link":"#or条件","children":[]},{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":3,"title":"Limi&Offset","slug":"limi-offset","link":"#limi-offset","children":[]},{"level":3,"title":"Distinct","slug":"distinct","link":"#distinct","children":[]},{"level":3,"title":"Group&Having","slug":"group-having","link":"#group-having","children":[]},{"level":3,"title":"Join","slug":"join","link":"#join","children":[]},{"level":3,"title":"Scan","slug":"scan","link":"#scan","children":[]}]},{"level":2,"title":"高级查询","slug":"高级查询","link":"#高级查询","children":[{"level":3,"title":"自动选择字段","slug":"自动选择字段","link":"#自动选择字段","children":[]},{"level":3,"title":"锁","slug":"锁","link":"#锁","children":[]},{"level":3,"title":"子查询","slug":"子查询","link":"#子查询","children":[]},{"level":3,"title":"条件组","slug":"条件组","link":"#条件组","children":[]},{"level":3,"title":"多列IN","slug":"多列in","link":"#多列in","children":[]},{"level":3,"title":"命名参数","slug":"命名参数","link":"#命名参数","children":[]},{"level":3,"title":"Map扫描","slug":"map扫描","link":"#map扫描","children":[]},{"level":3,"title":"FirstOrInit","slug":"firstorinit","link":"#firstorinit","children":[]},{"level":3,"title":"FirstOrCreate","slug":"firstorcreate","link":"#firstorcreate","children":[]},{"level":3,"title":"优化器/索引提示","slug":"优化器-索引提示","link":"#优化器-索引提示","children":[]},{"level":3,"title":"迭代","slug":"迭代","link":"#迭代","children":[]},{"level":3,"title":"FindInBatches","slug":"findinbatches","link":"#findinbatches","children":[]},{"level":3,"title":"钩子方法","slug":"钩子方法","link":"#钩子方法","children":[]},{"level":3,"title":"Pluck","slug":"pluck","link":"#pluck","children":[]},{"level":3,"title":"Scope","slug":"scope","link":"#scope","children":[]},{"level":3,"title":"Count","slug":"count","link":"#count","children":[]}]},{"level":2,"title":"创建","slug":"创建","link":"#创建","children":[{"level":3,"title":"指定字段","slug":"指定字段","link":"#指定字段","children":[]},{"level":3,"title":"字段默认值","slug":"字段默认值","link":"#字段默认值","children":[]},{"level":3,"title":"批量创建","slug":"批量创建","link":"#批量创建","children":[]},{"level":3,"title":"Map创建","slug":"map创建","link":"#map创建","children":[]},{"level":3,"title":"钩子方法","slug":"钩子方法-1","link":"#钩子方法-1","children":[]},{"level":3,"title":"关联创建","slug":"关联创建","link":"#关联创建","children":[]},{"level":3,"title":"Upsert 及冲突","slug":"upsert-及冲突","link":"#upsert-及冲突","children":[]}]},{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[{"level":3,"title":"所有字段","slug":"所有字段","link":"#所有字段","children":[]},{"level":3,"title":"单列","slug":"单列","link":"#单列","children":[]},{"level":3,"title":"多列","slug":"多列","link":"#多列","children":[]},{"level":3,"title":"选定字段","slug":"选定字段","link":"#选定字段","children":[]},{"level":3,"title":"批量更新","slug":"批量更新","link":"#批量更新","children":[]},{"level":3,"title":"阻止全局更新","slug":"阻止全局更新","link":"#阻止全局更新","children":[]},{"level":3,"title":"使用SQL表达式","slug":"使用sql表达式","link":"#使用sql表达式","children":[]},{"level":3,"title":"子查询更新","slug":"子查询更新","link":"#子查询更新","children":[]},{"level":3,"title":"更新钩子方法","slug":"更新钩子方法","link":"#更新钩子方法","children":[]},{"level":3,"title":"禁止Hook与时间更新","slug":"禁止hook与时间更新","link":"#禁止hook与时间更新","children":[]},{"level":3,"title":"返回更新的数据","slug":"返回更新的数据","link":"#返回更新的数据","children":[]},{"level":3,"title":"检查字段值是否有更新","slug":"检查字段值是否有更新","link":"#检查字段值是否有更新","children":[]},{"level":3,"title":"在更新前修改值","slug":"在更新前修改值","link":"#在更新前修改值","children":[]}]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[{"level":3,"title":"单个删除","slug":"单个删除","link":"#单个删除","children":[]},{"level":3,"title":"根据主键删除","slug":"根据主键删除","link":"#根据主键删除","children":[]},{"level":3,"title":"批量删除","slug":"批量删除","link":"#批量删除","children":[]},{"level":3,"title":"阻止全局删除","slug":"阻止全局删除","link":"#阻止全局删除","children":[]},{"level":3,"title":"返回删除行的数据","slug":"返回删除行的数据","link":"#返回删除行的数据","children":[]},{"level":3,"title":"软删除","slug":"软删除","link":"#软删除","children":[]},{"level":3,"title":"软删除标志","slug":"软删除标志","link":"#软删除标志","children":[]}]},{"level":2,"title":"SQL构建器","slug":"sql构建器","link":"#sql构建器","children":[{"level":3,"title":"原生SQL","slug":"原生sql","link":"#原生sql","children":[]},{"level":3,"title":"命名参数","slug":"命名参数-1","link":"#命名参数-1","children":[]},{"level":3,"title":"DryRun模式","slug":"dryrun模式","link":"#dryrun模式","children":[]},{"level":3,"title":"TOSQL","slug":"tosql","link":"#tosql","children":[]},{"level":3,"title":"Row & Rows","slug":"row-rows","link":"#row-rows","children":[]},{"level":3,"title":"连接","slug":"连接","link":"#连接","children":[]},{"level":3,"title":"子句(Clause)","slug":"子句-clause","link":"#子句-clause","children":[]},{"level":3,"title":"子句构造器","slug":"子句构造器","link":"#子句构造器","children":[]},{"level":3,"title":"子句选项","slug":"子句选项","link":"#子句选项","children":[]},{"level":3,"title":"StatementModifier","slug":"statementmodifier","link":"#statementmodifier","children":[]}]},{"level":2,"title":"Belongs To","slug":"belongs-to","link":"#belongs-to","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"重写外键","slug":"重写外键","link":"#重写外键","children":[]},{"level":3,"title":"重写引用","slug":"重写引用","link":"#重写引用","children":[]},{"level":3,"title":"外键约束","slug":"外键约束","link":"#外键约束","children":[]}]},{"level":2,"title":"Has One","slug":"has-one","link":"#has-one","children":[{"level":3,"title":"重写外键","slug":"重写外键-1","link":"#重写外键-1","children":[]},{"level":3,"title":"重写引用","slug":"重写引用-1","link":"#重写引用-1","children":[]},{"level":3,"title":"多态关联","slug":"多态关联","link":"#多态关联","children":[]},{"level":3,"title":"自引用 Has One","slug":"自引用-has-one","link":"#自引用-has-one","children":[]},{"level":3,"title":"外键约束","slug":"外键约束-1","link":"#外键约束-1","children":[]}]},{"level":2,"title":"Has Many","slug":"has-many","link":"#has-many","children":[{"level":3,"title":"声明","slug":"声明","link":"#声明","children":[]},{"level":3,"title":"检索","slug":"检索","link":"#检索","children":[]},{"level":3,"title":"重写外键","slug":"重写外键-2","link":"#重写外键-2","children":[]},{"level":3,"title":"重写引用","slug":"重写引用-2","link":"#重写引用-2","children":[]},{"level":3,"title":"多态关联","slug":"多态关联-1","link":"#多态关联-1","children":[]},{"level":3,"title":"自引用","slug":"自引用","link":"#自引用","children":[]},{"level":3,"title":"外键约束","slug":"外键约束-2","link":"#外键约束-2","children":[]}]},{"level":2,"title":"Many To Many","slug":"many-to-many","link":"#many-to-many","children":[{"level":3,"title":"声明","slug":"声明-1","link":"#声明-1","children":[]},{"level":3,"title":"检索","slug":"检索-1","link":"#检索-1","children":[]},{"level":3,"title":"重写外键","slug":"重写外键-3","link":"#重写外键-3","children":[]},{"level":3,"title":"自引用","slug":"自引用-1","link":"#自引用-1","children":[]},{"level":3,"title":"自定义连接表","slug":"自定义连接表","link":"#自定义连接表","children":[]},{"level":3,"title":"外键约束","slug":"外键约束-3","link":"#外键约束-3","children":[]},{"level":3,"title":"复合外键","slug":"复合外键","link":"#复合外键","children":[]}]},{"level":2,"title":"关联模式","slug":"关联模式","link":"#关联模式","children":[{"level":3,"title":"自动创建，更新","slug":"自动创建-更新","link":"#自动创建-更新","children":[]},{"level":3,"title":"跳过自动创建、更新","slug":"跳过自动创建、更新","link":"#跳过自动创建、更新","children":[]},{"level":3,"title":"查找关联","slug":"查找关联","link":"#查找关联","children":[]},{"level":3,"title":"添加关联","slug":"添加关联","link":"#添加关联","children":[]},{"level":3,"title":"替换关联","slug":"替换关联","link":"#替换关联","children":[]},{"level":3,"title":"删除关联","slug":"删除关联","link":"#删除关联","children":[]},{"level":3,"title":"清空关联","slug":"清空关联","link":"#清空关联","children":[]},{"level":3,"title":"关联计数","slug":"关联计数","link":"#关联计数","children":[]},{"level":3,"title":"批量处理","slug":"批量处理","link":"#批量处理","children":[]},{"level":3,"title":"Select删除","slug":"select删除","link":"#select删除","children":[]},{"level":3,"title":"关联标签","slug":"关联标签","link":"#关联标签","children":[]}]},{"level":2,"title":"预加载","slug":"预加载","link":"#预加载","children":[{"level":3,"title":"Joins 预加载","slug":"joins-预加载","link":"#joins-预加载","children":[]},{"level":3,"title":"预加载全部","slug":"预加载全部","link":"#预加载全部","children":[]},{"level":3,"title":"条件预加载","slug":"条件预加载","link":"#条件预加载","children":[]},{"level":3,"title":"自定义预加载","slug":"自定义预加载","link":"#自定义预加载","children":[]},{"level":3,"title":"嵌套预加载","slug":"嵌套预加载","link":"#嵌套预加载","children":[]}]},{"level":2,"title":"Context","slug":"context","link":"#context","children":[{"level":3,"title":"单会话模式","slug":"单会话模式","link":"#单会话模式","children":[]},{"level":3,"title":"持续会话模式","slug":"持续会话模式","link":"#持续会话模式","children":[]},{"level":3,"title":"会话超时","slug":"会话超时","link":"#会话超时","children":[]},{"level":3,"title":"Hooks/Callbacks 中的 Context","slug":"hooks-callbacks-中的-context","link":"#hooks-callbacks-中的-context","children":[]}]},{"level":2,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]},{"level":3,"title":"错误列表","slug":"错误列表","link":"#错误列表","children":[]}]},{"level":2,"title":"链式操作","slug":"链式操作","link":"#链式操作","children":[{"level":3,"title":"链式方法","slug":"链式方法","link":"#链式方法","children":[]},{"level":3,"title":"终结方法","slug":"终结方法","link":"#终结方法","children":[]},{"level":3,"title":"新建会话方法","slug":"新建会话方法","link":"#新建会话方法","children":[]}]},{"level":2,"title":"会话","slug":"会话","link":"#会话","children":[{"level":3,"title":"DryRun","slug":"dryrun","link":"#dryrun","children":[]},{"level":3,"title":"预编译","slug":"预编译","link":"#预编译","children":[]},{"level":3,"title":"NewDB","slug":"newdb","link":"#newdb","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"跳过钩子","slug":"跳过钩子","link":"#跳过钩子","children":[]},{"level":3,"title":"禁用嵌套事务","slug":"禁用嵌套事务","link":"#禁用嵌套事务","children":[]},{"level":3,"title":"禁用全局更新","slug":"禁用全局更新","link":"#禁用全局更新","children":[]},{"level":3,"title":"保存所有关联","slug":"保存所有关联","link":"#保存所有关联","children":[]},{"level":3,"title":"Context","slug":"context-1","link":"#context-1","children":[]},{"level":3,"title":"自定义 Logger","slug":"自定义-logger","link":"#自定义-logger","children":[]},{"level":3,"title":"NowFunc","slug":"nowfunc","link":"#nowfunc","children":[]},{"level":3,"title":"调试","slug":"调试","link":"#调试","children":[]},{"level":3,"title":"查询字段","slug":"查询字段","link":"#查询字段","children":[]},{"level":3,"title":"CreateBatchSize","slug":"createbatchsize","link":"#createbatchsize","children":[]}]},{"level":2,"title":"钩子方法","slug":"钩子方法-2","link":"#钩子方法-2","children":[{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"创建钩子","slug":"创建钩子","link":"#创建钩子","children":[]},{"level":3,"title":"更新钩子","slug":"更新钩子","link":"#更新钩子","children":[]},{"level":3,"title":"删除钩子","slug":"删除钩子","link":"#删除钩子","children":[]},{"level":3,"title":"查询钩子","slug":"查询钩子","link":"#查询钩子","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":3,"title":"唯一索引","slug":"唯一索引","link":"#唯一索引","children":[]},{"level":3,"title":"复合索引","slug":"复合索引","link":"#复合索引","children":[]},{"level":3,"title":"字段优先级","slug":"字段优先级","link":"#字段优先级","children":[]},{"level":3,"title":"共享复合索引","slug":"共享复合索引","link":"#共享复合索引","children":[]},{"level":3,"title":"多索引","slug":"多索引","link":"#多索引","children":[]}]},{"level":2,"title":"约束","slug":"约束","link":"#约束","children":[{"level":3,"title":"检查约束","slug":"检查约束","link":"#检查约束","children":[]},{"level":3,"title":"外键约束","slug":"外键约束-4","link":"#外键约束-4","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"禁用默认事务","slug":"禁用默认事务","link":"#禁用默认事务","children":[]},{"level":3,"title":"事务使用","slug":"事务使用","link":"#事务使用","children":[]},{"level":3,"title":"嵌套事务","slug":"嵌套事务","link":"#嵌套事务","children":[]},{"level":3,"title":"手动事务","slug":"手动事务","link":"#手动事务","children":[]},{"level":3,"title":"定点回滚","slug":"定点回滚","link":"#定点回滚","children":[]}]},{"level":2,"title":"迁移","slug":"迁移","link":"#迁移","children":[{"level":3,"title":"自动迁移","slug":"自动迁移","link":"#自动迁移","children":[]},{"level":3,"title":"Migrator 接口","slug":"migrator-接口","link":"#migrator-接口","children":[]},{"level":3,"title":"当前数据库","slug":"当前数据库","link":"#当前数据库","children":[]},{"level":3,"title":"表","slug":"表","link":"#表","children":[]},{"level":3,"title":"列","slug":"列","link":"#列","children":[]},{"level":3,"title":"约束","slug":"约束-1","link":"#约束-1","children":[]},{"level":3,"title":"索引","slug":"索引-1","link":"#索引-1","children":[]}]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[{"level":3,"title":"日志级别","slug":"日志级别","link":"#日志级别","children":[]},{"level":3,"title":"Debug","slug":"debug","link":"#debug","children":[]},{"level":3,"title":"自定义 Logger","slug":"自定义-logger-1","link":"#自定义-logger-1","children":[]}]},{"level":2,"title":"安全","slug":"安全","link":"#安全","children":[{"level":3,"title":"查询条件","slug":"查询条件","link":"#查询条件","children":[]},{"level":3,"title":"内联条件","slug":"内联条件-1","link":"#内联条件-1","children":[]},{"level":3,"title":"SQL 注入方法","slug":"sql-注入方法","link":"#sql-注入方法","children":[]}]},{"level":2,"title":"通用数据库接口","slug":"通用数据库接口","link":"#通用数据库接口","children":[{"level":3,"title":"连接池","slug":"连接池-1","link":"#连接池-1","children":[]}]},{"level":2,"title":"性能","slug":"性能","link":"#性能","children":[{"level":3,"title":"禁用默认事务","slug":"禁用默认事务-1","link":"#禁用默认事务-1","children":[]},{"level":3,"title":"缓存预编译语句","slug":"缓存预编译语句","link":"#缓存预编译语句","children":[]},{"level":3,"title":"带预编译的SQL生成器","slug":"带预编译的sql生成器","link":"#带预编译的sql生成器","children":[]},{"level":3,"title":"缩小字段选择范围","slug":"缩小字段选择范围","link":"#缩小字段选择范围","children":[]},{"level":3,"title":"FindInBatches","slug":"findinbatches-1","link":"#findinbatches-1","children":[]},{"level":3,"title":"索引提示","slug":"索引提示","link":"#索引提示","children":[]},{"level":3,"title":"读写分离","slug":"读写分离","link":"#读写分离","children":[]}]},{"level":2,"title":"自定义数据类型","slug":"自定义数据类型","link":"#自定义数据类型","children":[{"level":3,"title":"Scanner/valuer","slug":"scanner-valuer","link":"#scanner-valuer","children":[]},{"level":3,"title":"数据类型接口","slug":"数据类型接口","link":"#数据类型接口","children":[]},{"level":3,"title":"GormValuerInterface","slug":"gormvaluerinterface","link":"#gormvaluerinterface","children":[]},{"level":3,"title":"子句表达式","slug":"子句表达式","link":"#子句表达式","children":[]}]},{"level":2,"title":"Scope","slug":"scope-1","link":"#scope-1","children":[{"level":3,"title":"查询","slug":"查询-1","link":"#查询-1","children":[]},{"level":3,"title":"分页","slug":"分页","link":"#分页","children":[]},{"level":3,"title":"动态表","slug":"动态表","link":"#动态表","children":[]},{"level":3,"title":"更新","slug":"更新-1","link":"#更新-1","children":[]}]},{"level":2,"title":"数据库实例的上下文值传递","slug":"数据库实例的上下文值传递","link":"#数据库实例的上下文值传递","children":[{"level":3,"title":"Set / Get","slug":"set-get","link":"#set-get","children":[]},{"level":3,"title":"InstanceSet / InstanceGet","slug":"instanceset-instanceget","link":"#instanceset-instanceget","children":[]}]},{"level":2,"title":"数据库解析器","slug":"数据库解析器","link":"#数据库解析器","children":[{"level":3,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":3,"title":"自动切换连接","slug":"自动切换连接","link":"#自动切换连接","children":[]},{"level":3,"title":"读写分离","slug":"读写分离-1","link":"#读写分离-1","children":[]},{"level":3,"title":"手动切换连接","slug":"手动切换连接","link":"#手动切换连接","children":[]},{"level":3,"title":"事务","slug":"事务-1","link":"#事务-1","children":[]},{"level":3,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":3,"title":"连接池","slug":"连接池-2","link":"#连接池-2","children":[]}]}],"git":{"createdTime":1676264655000,"updatedTime":1680418229000,"contributors":[{"name":"246859","email":"2633565580@qq.com","commits":2}]},"readingTime":{"minutes":160.43,"words":24064},"filePathRelative":"语言进阶/实用框架/gorm.md","localizedDate":"2023年2月13日","autoDesc":true}');export{l as data};