import { CodeBlock } from './CodeBlock';
import { Translation } from '@/lib/i18n';

interface ExamplesProps {
  translation: Translation;
}

export function Examples({ translation }: ExamplesProps) {
  const interceptorCode = `final class DefaultInterceptor: RequestInterceptor, @unchecked Sendable {
    
    @UserDefaultBackend(key: .tokens(.accessToken))
    var accessToken: String?
    
    func intercept(with urlRequest: inout URLRequest) {
        urlRequest.setValue("Bearer \\(String(describing: accessToken ?? ""))", forHTTPHeaderField: "Authorization")
    }
}`;

  const authorizationCode = `final class DefaultAuthorization: Authorization, @unchecked Sendable {
    
    @UserDefaultBackend(key: .tokens(.accessToken))
    private var accessToken: String?
    
    @UserDefaultBackend(key: .tokens(.refreshToken))
    private var refreshToken: String?
    
    func refreshToken<T>(
        completion: @escaping (Model.Type, Parameters) async throws -> Model
    ) async throws -> T where T: Model {
        
        let request = RefreshTokenRequestModel(refreshToken: String(describing: refreshToken ?? ""))
        
        let parameters = Parameters(
            method: .POST,
            httpRequest: request,
            path: ApiPath.defaultPath(.refreshToken)
        )
        
        return try await completion(RefreshTokenRequestModel.self, parameters) as! T
    }
    
    func save(withData data: Data) {
        let decoder = JSONDecoder()
        let response = try? decoder.decode(AuthResponseModel.self, from: data)
        refreshToken = response?.refreshToken
        accessToken = response?.accessToken
    }
}`;

  const mtlsCode = `func testRequest() async throws -> [ResponseModel]? {
    return try await factory
        .makeHttpService()
        .certificate()
        .fetchAsync(
            [ResponseModel].self,
            parameters: Parameters(
                method: .GET,
                path: ApiPath.defaultPath(.test)
            )
        )
}`;

  const fullExampleCode = `func testRequest() async throws -> [ResponseModel]? {
    return try await factory
        .makeHttpService()
        .interceptor(DefaultInterceptor())
        .authorization(DefaultAuthorization())
        .certificate()
        .fetchAsync(
            [ResponseModel].self,
            parameters: Parameters(
                method: .GET,
                path: ApiPath.defaultPath(.test)
            )
        )
}`;

  const socketCode = `let instance = LCSocketManager.shared
instance.disconnect()
        
if let token = accessToken {
    instance.setConfiguration(
        SocketConfiguration(
            token: token,
            url: urlConfigs.baseURL,
            port: urlConfigs.port)
    )?
        .connect()
        .receivedPublisher(eventsName: [
            Notification.Name("name")
        ])
}`;

  const paginationCode = `.fetchAsync(
    Pagination<ResponseModel>.self,
    parameters: Parameters(
        method: .GET,
        path: ApiPath.defaultPath(.test),
        param: userId
    )
)`;

  const queryStringCode = `.fetchAsync(
    Pagination<ProgramContentResponseModel>.self,
    parameters: Parameters(
        method: .GET,
        path: ApiPath.defaultPath(.test),
        queryString: [.sortBy: "ASC"],
        param: submatterId,
    )
)`;

  return (
    <section id="examples" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {translation.advanced.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore advanced features and integration patterns
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Request Interceptors */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.interceptors}
            </h3>
            <CodeBlock code={interceptorCode} title="DefaultInterceptor.swift" />
          </div>

          {/* Authorization */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.authorization}
            </h3>
            <CodeBlock code={authorizationCode} title="DefaultAuthorization.swift" />
          </div>

          {/* MTLS Certificate Support */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.mtlsCertificate}
            </h3>
            <p className="text-muted-foreground mb-6">
              To enable MTLS, simply chain <code className="bg-muted px-2 py-1 rounded text-sm">.certificate()</code>:
            </p>
            <CodeBlock code={mtlsCode} />
          </div>

          {/* Full Example */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.fullExample}
            </h3>
            <CodeBlock code={fullExampleCode} />
          </div>

          {/* WebSocket Support */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.sockets}
            </h3>
            <CodeBlock code={socketCode} />
          </div>

          {/* Pagination */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.pagination}
            </h3>
            <CodeBlock code={paginationCode} />
          </div>

          {/* Query String and Params */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.advanced.queryString}
            </h3>
            <CodeBlock code={queryStringCode} />
          </div>
        </div>
      </div>
    </section>
  );
}