import { testConnection, query } from '@/lib/db';

export default async function DBTestPage() {
  // 测试连接
  const connectionTest = await testConnection();

  // 尝试获取数据库版本
  let versionInfo = null;
  let tablesList = null;
  
  if (connectionTest.success) {
    try {
      const versionResult = await query('SELECT version()');
      versionInfo = versionResult.rows[0].version;

      // 获取所有表
      const tablesResult = await query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name
      `);
      tablesList = tablesResult.rows;
    } catch (error) {
      console.error('Error fetching database info:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          数据库连接测试
        </h1>

        {/* 连接状态 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">连接状态</h2>
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 rounded-full ${
                connectionTest.success ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
            <span className="text-lg">
              {connectionTest.success ? '✅ 连接成功' : '❌ 连接失败'}
            </span>
          </div>
          {connectionTest.timestamp && (
            <p className="mt-2 text-gray-600">
              服务器时间: {new Date(connectionTest.timestamp).toLocaleString('zh-CN')}
            </p>
          )}
          {!connectionTest.success && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
              <p className="text-red-700 font-semibold">错误信息:</p>
              <p className="text-red-600 mt-1">{connectionTest.message}</p>
            </div>
          )}
        </div>

        {/* 数据库版本信息 */}
        {versionInfo && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">数据库版本</h2>
            <p className="text-gray-700 font-mono text-sm break-all">
              {versionInfo}
            </p>
          </div>
        )}

        {/* 数据库表列表 */}
        {tablesList && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              数据库表 ({tablesList.length})
            </h2>
            {tablesList.length > 0 ? (
              <ul className="space-y-2">
                {tablesList.map((table: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded"
                  >
                    <span className="text-blue-600">📊</span>
                    <span className="font-mono">{table.table_name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">暂无表</p>
            )}
          </div>
        )}

        {/* 连接配置信息 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">连接配置</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>
              <span className="text-gray-600">Host:</span>{' '}
              <span className="text-gray-900">{process.env.DB_HOST || 'localhost'}</span>
            </p>
            <p>
              <span className="text-gray-600">Port:</span>{' '}
              <span className="text-gray-900">{process.env.DB_PORT || '5432'}</span>
            </p>
            <p>
              <span className="text-gray-600">Database:</span>{' '}
              <span className="text-gray-900">{process.env.DB_NAME || 'ai_shop'}</span>
            </p>
            <p>
              <span className="text-gray-600">User:</span>{' '}
              <span className="text-gray-900">{process.env.DB_USER || 'postgres'}</span>
            </p>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-blue-800">
            💡 <strong>提示:</strong> 如果连接失败，请检查：
          </p>
          <ul className="mt-2 ml-6 list-disc text-blue-700 space-y-1">
            <li>Docker 容器是否正在运行</li>
            <li>PostgreSQL 端口是否正确映射（默认 5432）</li>
            <li>.env.local 文件中的数据库配置是否正确</li>
            <li>数据库名称是否已创建</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

