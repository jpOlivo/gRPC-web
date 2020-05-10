/**
 * @fileoverview gRPC-Web generated client stub for com.jpolivo.demogrpc.core
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.jpolivo = {};
proto.com.jpolivo.demogrpc = {};
proto.com.jpolivo.demogrpc.core = require('./GreetingService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.jpolivo.demogrpc.core.GreetingServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.jpolivo.demogrpc.core.GreetingServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.jpolivo.demogrpc.core.GreetingRequest,
 *   !proto.com.jpolivo.demogrpc.core.GreetingResponse>}
 */
const methodDescriptor_GreetingService_greeting = new grpc.web.MethodDescriptor(
  '/com.jpolivo.demogrpc.core.GreetingService/greeting',
  grpc.web.MethodType.UNARY,
  proto.com.jpolivo.demogrpc.core.GreetingRequest,
  proto.com.jpolivo.demogrpc.core.GreetingResponse,
  /**
   * @param {!proto.com.jpolivo.demogrpc.core.GreetingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.jpolivo.demogrpc.core.GreetingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.jpolivo.demogrpc.core.GreetingRequest,
 *   !proto.com.jpolivo.demogrpc.core.GreetingResponse>}
 */
const methodInfo_GreetingService_greeting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.jpolivo.demogrpc.core.GreetingResponse,
  /**
   * @param {!proto.com.jpolivo.demogrpc.core.GreetingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.jpolivo.demogrpc.core.GreetingResponse.deserializeBinary
);


/**
 * @param {!proto.com.jpolivo.demogrpc.core.GreetingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.jpolivo.demogrpc.core.GreetingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.jpolivo.demogrpc.core.GreetingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.jpolivo.demogrpc.core.GreetingServiceClient.prototype.greeting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.jpolivo.demogrpc.core.GreetingService/greeting',
      request,
      metadata || {},
      methodDescriptor_GreetingService_greeting,
      callback);
};


/**
 * @param {!proto.com.jpolivo.demogrpc.core.GreetingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.jpolivo.demogrpc.core.GreetingResponse>}
 *     A native promise that resolves to the response
 */
proto.com.jpolivo.demogrpc.core.GreetingServicePromiseClient.prototype.greeting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.jpolivo.demogrpc.core.GreetingService/greeting',
      request,
      metadata || {},
      methodDescriptor_GreetingService_greeting);
};


module.exports = proto.com.jpolivo.demogrpc.core;

